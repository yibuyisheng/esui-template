import parser from 'html-parser';
import fs from 'fs';

function guid() {
    guid.id = guid.id || 0;
    guid.id++;
    return guid.id;
}

function createTree(root) {
    let children = [];
    if (root.children) {
        for (let i = 0, il = root.children.length; i < il; i++) {
            let tagObj = root.children[i];
            if (tagObj.tag === '#text' || tagObj.tag === '#comment') {
                children.push(`createElement('${tagObj.tag}', ${JSON.stringify(tagObj.attrs)}, \`${tagObj.content}\`)`);
            } else {
                children.push(`createElement('${tagObj.tag}', ${JSON.stringify(tagObj.attrs)}, ${createTree(tagObj)})`);
            }
        }
    }

    return `createElement('${root.tag}', ${JSON.stringify(root.attrs)}, [${children.join(',')}])`;
}

fs.readFile('./test/test.html', function (err, content) {
    let codes = [];
    let emitter = parser(content);
    emitter.on('tag', (tagObj) => {
        if (!tagObj.parent) {
            codes.push(createTree(tagObj));
            
        }
    });
});
