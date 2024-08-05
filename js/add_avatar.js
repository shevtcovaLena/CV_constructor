document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById("avatar");
  
    avatar.addEventListener("click", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.style.display = "none";
  
      fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            avatar.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
  
      document.body.appendChild(fileInput);
      fileInput.click();
  
      fileInput.addEventListener("change", () => {
        document.body.removeChild(fileInput);
      });
    });
  });
  
