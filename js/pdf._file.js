import html2pdf from "html2pdf.js";

const options = {
    margin: 2,
    filename: "myCV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 3, 
      width: 590,
      height: 836,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };
  
  const handleSave = (content) => {
    if (content) {
      html2pdf().set(options).from(content).save();
    }
  };

const resume = document.querySelector(".a4");
document.querySelector("#export").addEventListener("click", () => {
    console.log("click");    
    // handleSave(resume)
})