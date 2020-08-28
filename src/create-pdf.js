const  jsPDF = require('jspdf')
const  html2canvas = require('html2canvas')


// Function to create the pdf
// accept id's in array
async function createPdf(id) {
    id = '#' + id

    let pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        compression: true
    })

    console.log('id --------', document.querySelector(id))
    // Converting all the element into canvas and storing them in an array
    const canvas = await html2canvas(document.querySelector(id), { scale: 2 })

    console.log(canvas)

    let position = 0,
        pages = 0,
        width = 215.9, // Default pdf page width
        height
    const pageHeight = 297 // Default pdf page height


    // Internal scalefactor is used to scale the pdf and improve the quality of the pdf
    pdf.internal.scaleFactor = 2.25

    // aspect height of the canvas
    height = (canvas.height * width) / canvas.width

    // fill the background of the pdf with the background color of the pdf
    pdf.setFillColor(240, 242, 245)

    // adding the border of the pdf
    pdf.rect(
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height,
        'F'
    )

    // Adding the canvas into the pdf
    // here position start from the 0 (top) of the pdf
    // width is 215.9 which is same as canvas width in mm
    // height can be of any value i.e. either it can be of 200mm or of 500mm
    // but as default pdf height is of 297
    // So canvas will get printed upto the height of 297 only after that it get ignored
    pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        width,
        height,
        undefined,
        'FAST'
    )

    // adding border in the pdf
    pdf.rect(
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height,
        'S'
    )

    // If the aspect height of the canvas is greater than 297mm then portion after 297mm in first page get
    // ignored. To print the remaining portion we have to find in how many pages it get printed
    // So we decrease the 297mm from the canvas height as it already get printed and find in how many pages
    // it get printed
    pages = Math.ceil((height - pageHeight) / pageHeight)

    // printed the remaining portion of the canvas on the pdf
    for (let i = 1; i <= pages; i++) {
        // adding new page
        pdf.addPage()

        // set background color
        pdf.setFillColor(240, 242, 245)
        // adding border of pdf
        pdf.rect(
            0,
            0,
            pdf.internal.pageSize.width,
            pdf.internal.pageSize.height,
            'F'
        )

        // It is the important part of the this function
        // So position can be positive or negative
        // if position is in positive then it skip the height of the pdf from the top and then add the canvas
        //like eg if position is 50mm then it skip the 50mm from top of the pdf page and then start adding the
        // content
        // if position is in negative then it skip the height of the canvas/element from the canvas top and  then
        // it start adding the content of the canvas like eg if position is -300 then if skip 300mm  of the canvas
        // height and then start adding the remaining content to the pdf
        position = -1 * (pageHeight * i) + 17 * i

        // adding the content to the pdf
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, width, height)
        // adding border
        pdf.rect(
            0,
            0,
            pdf.internal.pageSize.width,
            pdf.internal.pageSize.height,
            'S'
        )
    }

    return pdf.save(`check.pdf`, { returnPromise: true })
}

function pdf(id) {
  return createPdf(id)
}
export { pdf }