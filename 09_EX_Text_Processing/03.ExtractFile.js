function solve(filePath) {
    let filePathArr = filePath.split('\\');
    let file = filePathArr.pop();
    let dotInd = file.lastIndexOf('.');
    let faleName = file.substring(0, dotInd);
    let fleExtension = file.substring(dotInd + 1);

    console.log(`File name: ${faleName}`);
    console.log(`File extension: ${fleExtension}`);
    
}

solve('C:\\Internal\\training-internal\\Template.pptx');