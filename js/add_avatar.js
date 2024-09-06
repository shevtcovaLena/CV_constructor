
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
            const img = new Image();
            img.src = e.target.result;
            
            img.onload = () => {
              // Задаем целевое разрешение для сжатия (например, 300x300)
              const targetSize = 248;

              // Создаем canvas для масштабирования
              const resizeCanvas = document.createElement("canvas");
              const resizeCtx = resizeCanvas.getContext("2d");

              // Вычисляем коэффициент масштабирования
              const scale = targetSize / Math.min(img.width, img.height);
              const newWidth = img.width * scale;
              const newHeight = img.height * scale;

              // Устанавливаем новое разрешение на canvas
              resizeCanvas.width = newWidth;
              resizeCanvas.height = newHeight;

              // Масштабируем изображение
              resizeCtx.drawImage(img, 0, 0, newWidth, newHeight);

              // Теперь обрезаем до квадрата
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");

              // Обрезка до квадрата
              const size = Math.min(newWidth, newHeight);
              canvas.width = size;
              canvas.height = size;

              // Вычисляем начальные координаты обрезки
              const x = (newWidth - size) / 2;
              const y = (newHeight - size) / 2;

              ctx.drawImage(resizeCanvas, x, y, size, size, 0, 0, size, size);

              // Устанавливаем обрезанное и сжатое изображение как источник для аватара
              avatar.src = canvas.toDataURL();
            };
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
