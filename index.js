
 function newImage(imagePath,left,bottom)
 {
     let createdImage = document.createElement('img')
     createdImage.src = imagePath
     createdImage.style.position = 'fixed'
     createdImage.style.left = left + 'px' 
     createdImage.style.bottom = bottom + 'px'
     document.body.append(createdImage)
     return createdImage
 }
 
newImage('assets/pine-tree.png','450','200')
newImage('assets/green-character.gif','100','100')
newImage('assets/tree.png','200','300')
newImage('assets/pillar.png','350','100')
newImage('assets/crate.png','150','200')
newImage('assets/well.png','500','425')


function newItem(imagePath,left,bottom){
    let createdItem = newImage(imagePath,left,bottom);
    createdItem.addEventListener('dblclick', ()=>{
        createdItem.remove()
    })
}

newItem('assets/sword.png', '500', '405')
newItem('assets/sheild.png','165','185')
newItem('assets/staff.png','600','100')

