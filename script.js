function previewImage(event) {
    const imageInput = event.target;
    const imagePreview = document.getElementById("imagePreview");
  
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const image = new Image();
        image.src = event.target.result;
        imagePreview.innerHTML = "";
        imagePreview.appendChild(image);
      };
  
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      imagePreview.innerHTML = "";
    }
  }
  
  function convertToPNG() {
    const fileInput = document.getElementById("imageInput");
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const image = new Image();
        image.src = event.target.result;
  
        image.onload = function() {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          canvas.width = image.width;
          canvas.height = image.height;
  
          ctx.drawImage(image, 0, 0);
  
          canvas.toBlob(function(blob) {
            const downloadLink = document.getElementById("downloadLink");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "converted_image.png";
            downloadLink.click();
          }, "image/png");
        };
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  function convertToJPG() {
    const fileInput = document.getElementById("imageInput");
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const image = new Image();
        image.src = event.target.result;
  
        image.onload = function() {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          canvas.width = image.width;
          canvas.height = image.height;
  
          ctx.drawImage(image, 0, 0);
  
          canvas.toBlob(function(blob) {
            const downloadLink = document.getElementById("downloadLink");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "converted_image.jpg";
            downloadLink.click();
          }, "image/jpeg", 0.8);
        };
      };
  
      reader.readAsDataURL(file);
    }
  }
  