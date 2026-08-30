const fs = require('fs')
const fileName = 'test.txt'
console.log('<------Creating file------->');
fs.writeFile(fileName, 'Hello to kaise h aap sb !!!!', (err) => {
    if (err) {
        console.log('Error creating File: ', err.message);
    } else {
        console.log('File Created');
    }

    console.log("<-------Reading File------->");
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log("Error Reading File: ", err.message);
            return
        }
        console.log(data);

        fs.appendFile(fileName, '\nLearning FS Module', (err) => {
            if (err) {
                console.log("Error Updating file:", err.message);
            } else {
                console.log("File updated");
            }

            fs.unlink(fileName, (err) => {
                if (err) {
                    console.log('Error deleting File:', err.message);
                } else {
                    console.log("File deleted successfully");
                }
            })
        })
    })
})
