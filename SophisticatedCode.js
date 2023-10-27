/* 
   FILENAME: SophisticatedCode.js
   CONTENT: This code demonstrates a complex and creative implementation of a multi-layered neural network for image classification.
*/

// Importing necessary libraries/modules
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');

// Defining the neural network architecture
const model = tf.sequential();
model.add(tf.layers.conv2d({
    inputShape: [28, 28, 1],
    kernelSize: 5,
    filters: 8,
    strides: 1,
    activation: 'relu',
    padding: 'same'
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
model.add(tf.layers.conv2d({
    kernelSize: 3,
    filters: 16,
    strides: 1,
    activation: 'relu',
    padding: 'same'
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

// Compiling the model
model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
});

// Loading and preprocessing the image dataset
const TRAIN_DATA_DIR = './train_images';
const TRAIN_LABELS_FILE = './train_labels.csv';

function loadImagesFromDir(directory) {
    const imageFilenames = fs.readdirSync(directory);
    const images = [];
    for (const filename of imageFilenames) {
        const image = loadImageFromFile(directory + '/' + filename);
        images.push(image);
    }
    return images;
}

function loadImageFromFile(filename) {
    const fileData = fs.readFileSync(filename);
    const tensor = tf.node.decodeImage(fileData, 1);
    const resizedTensor = tf.image.resizeBilinear(tensor, [28, 28]);
    const normalizedTensor = resizedTensor.toFloat().div(tf.scalar(255));
    return normalizedTensor;
}

const trainImages = loadImagesFromDir(TRAIN_DATA_DIR);
const trainLabels = fs.readFileSync(TRAIN_LABELS_FILE).toString().split('\n');

// One-hot encode the labels
const uniqueLabels = Array.from(new Set(trainLabels));
const labelToIndex = {};
for (let i = 0; i < uniqueLabels.length; i++) {
    labelToIndex[uniqueLabels[i]] = i;
}

const encodedTrainLabels = trainLabels.map(label => {
    const encoding = new Array(uniqueLabels.length).fill(0);
    encoding[labelToIndex[label]] = 1;
    return encoding;
});

// Training the model
const NUM_EPOCHS = 10;
const BATCH_SIZE = 64;

model.fit(tf.stack(trainImages), tf.tensor2d(encodedTrainLabels), {
    epochs: NUM_EPOCHS,
    batchSize: BATCH_SIZE
}).then(async () => {
    await model.save('file://./trained_model');
    console.log('Model training complete.');
});