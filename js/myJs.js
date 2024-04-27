
const textConfig = {
    text1: "Hi hi !",
    text2: "Tớ có điều này muốn hỏi",
    text3: "How do you feel about me ??",
    text4: "Hi",
    text5: "Rất là thân thiện và hiền lành !!" ,
    text6: "Cảm nhận khác...",
  
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    var currentAudio = null; // Biến để lưu trữ âm thanh hiện tại
  
    setTimeout(function () {
      firstQuestion();
      $(".spinner").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
      $("body").delay(350).css({
        overflow: "visible",
      });
    }, 600);
  
    document.getElementById("text3").innerHTML = textConfig.text3;
    document.getElementById("text4").innerHTML = textConfig.text4;
    document.getElementById("no").innerHTML = textConfig.text5;
    document.getElementById("yes").innerHTML = textConfig.text6;
  
    function showContent() {
      document.querySelector(".content").style.opacity = 1;
      document.querySelector(".content").style.transition = "opacity 0.5s ease-in-out";
    }
  
    function firstQuestion() {
      // document.querySelector(".content").style.display = "none";
      Swal.fire({
        title: textConfig.text1,
        text: textConfig.text2,
        imageUrl: "img/cuteCat.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: "Custom image",
      }).then(function () {
        showContent();
      });
    }
  
    function switchButton() {
      stopCurrentAudio(); // Dừng âm thanh hiện tại trước khi phát âm thanh mới
    
      audio.play();
      currentAudio = audio; // Lưu trữ âm thanh mới vào biến currentAudio
      var leftNo = document.getElementById("no").style.left;
      var topNO = document.getElementById("no").style.top;
      var leftY = document.getElementById("yes").style.left;
      var topY = document.getElementById("yes").style.top;
      document.getElementById("no").style.left = leftY;
      document.getElementById("no").style.top = topY;
      document.getElementById("yes").style.left = leftNo;
      document.getElementById("yes").style.top = topNO;
    }
  
    function moveButton() {
      stopCurrentAudio(); // Dừng âm thanh hiện tại trước khi phát âm thanh mới
  
      audio.play();
      currentAudio = audio; // Lưu trữ âm thanh mới vào biến currentAudio
      var x, y;
  
      if (screen.width <= 600) {
        x = Math.random() * 300;
        y = Math.random() * 500;
      } else {
        x = Math.random() * 500;
        y = Math.random() * 500;
      }
  
      var left = x + "px";
      var top = y + "px";
  
      document.getElementById("yes").style.left = left;
      document.getElementById("yes").style.top = top;
    }
  
    function stopCurrentAudio() {
      if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }
  
    // var n = 0;
    // document.getElementById("yes").addEventListener("mousemove", function () {
    //   if (n < 1) switchButton();
    //   if (n > 1) moveButton();
    //   n++;
    // });
  
    // document.getElementById("yes").addEventListener("click", function () {
    //   if (screen.width >= 900) switchButton();
    // });
  
    function textGenerate() {
      var n = "";
      var text = " " + textConfig.text9;
      var a = Array.from(text);
      var textVal = document.getElementById("txtReason").value || "";
      var count = textVal.length;
  
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          n = n + a[i];
          if (i == text.length + 1) {
            document.getElementById("txtReason").value = "";
            n = "";
            break;
          }
        }
      }
  
      document.getElementById("txtReason").value = n;
    }
  
    function handleButtonClick(buttonId) {
      // Tải lại giao diện
      hideCurrentContent();
    }
    
  //   document.getElementById("hate").addEventListener("click", function () {
      
  //     // Hiển thị icon "crying.gif" ở giữa màn hình
  //     var cryingIcon = document.createElement("img");
  //     cryingIcon.src = "img/cry.gif";
  //     cryingIcon.alt = "Crying Icon";
  //     cryingIcon.style.position = "fixed";
  //     cryingIcon.style.top = "33%";
  //     cryingIcon.style.left = "50%";
  //     cryingIcon.style.width = "120px";  // Điều chỉnh chiều rộng
  //     cryingIcon.style.height = "120px"; // Điều chỉnh chiều cao
  //     cryingIcon.style.opacity = 0; // Đặt opacity ban đầu là 0
  //     cryingIcon.style.transform = "translate(-50%, -50%)";
  //     cryingIcon.style.zIndex = "9999";
  
  //     // Thêm icon vào body
  //     document.body.appendChild(cryingIcon);
  
  //     // Dừng âm thanh hiện tại trước khi phát âm thanh mới
  //     stopCurrentAudio();
  
  //     // Chờ 1 giây trước khi phát nhạc
  //     setTimeout(function () {
  //         var audio = new Audio("sound/short_tuyHN.mp3");
  //         audio.play();
  //         currentAudio = audio; // Lưu trữ âm thanh mới vào biến currentAudio
  
  //         // Tăng opacity dần để icon xuất hiện
  //         var opacity = 0;
  //         var intervalID = setInterval(function () {
  //             if (opacity < 1) {
  //                 opacity += 0.1;
  //                 cryingIcon.style.opacity = opacity;
  //             } else {
  //                 clearInterval(intervalID);
  
  //                 var apologyText = document.createElement("div");
  //                 apologyText.textContent = "em xin lũi";
  //                 apologyText.style.position = "fixed";
  //                 apologyText.style.top = "19%";
  //                 apologyText.style.left = "50%";
  //                 apologyText.style.transform = "translateX(-50%)";
  //                 apologyText.style.fontSize = "24px";
  //                 apologyText.style.fontWeight = "bold";
  //                 apologyText.style.color = "blue";
  //                 apologyText.style.zIndex = "9999";
  
  //                 // Thêm dòng chữ vào body
  //                 document.body.appendChild(apologyText);
  
  //                 // Ẩn icon và bảng dòng chữ sau một khoảng thời gian
  //                 setTimeout(function () {
  //                     var iconOpacity = 1;
  //                     var textOpacity = 1;
  
  //                     var iconIntervalID = setInterval(function () {
  //                         if (iconOpacity > 0) {
  //                             iconOpacity -= 0.1;
  //                             cryingIcon.style.opacity = iconOpacity;
  //                         } else {
  //                             clearInterval(iconIntervalID);
  //                             document.body.removeChild(cryingIcon);
  //                         }
  //                     }, 500);
  
  //                     var textIntervalID = setInterval(function () {
  //                         if (textOpacity > 0) {
  //                             textOpacity -= 0.1;
  //                             apologyText.style.opacity = textOpacity;
  //                         } else {
  //                             clearInterval(textIntervalID);
  //                             document.body.removeChild(apologyText);
  //                         }
  //                     }, 700);
  //                 }, 20000); // 25 giây (15000 milliseconds)
  //             }
  //         }, 500);
  //     }, 400); // Chờ 0.4 giây trước khi phát nhạc (1000 milliseconds)
  // });
  
  // document.getElementById("no").addEventListener("click", function () {
    
  //   // Gọi hàm xử lý sau khi giao diện đã được tải lại
  //   setTimeout(function () {
  
  //     // Hiển thị icon "crying.gif" ở giữa màn hình
  //     var cryingIcon = document.createElement("img");
  //     cryingIcon.src = "img/cute.gif";
  //     cryingIcon.alt = "Crying Icon";
  //     cryingIcon.style.position = "fixed";
  //     cryingIcon.style.top = "33%";
  //     cryingIcon.style.left = "50%";
  //     cryingIcon.style.width = "120px";  // Điều chỉnh chiều rộng
  //     cryingIcon.style.height = "120px"; // Điều chỉnh chiều cao
  //     cryingIcon.style.opacity = 0; // Đặt opacity ban đầu là 0
  //     cryingIcon.style.transform = "translate(-50%, -50%)";
  //     cryingIcon.style.zIndex = "9999";
  
  //     // Thêm icon vào body
  //     document.body.appendChild(cryingIcon);
  
  //     // Dừng âm thanh hiện tại trước khi phát âm thanh mới
  //     stopCurrentAudio();
  
  //     // Chờ 1 giây trước khi phát nhạc
  //     setTimeout(function () {
  //       var audio = new Audio("sound/short_HopeYou.mp3");
  //       audio.play();
  //       currentAudio = audio; 
  
  //       // Tăng opacity dần để icon xuất hiện
  //       var opacity = 0;
  //       var intervalID = setInterval(function () {
  //         if (opacity < 1) {
  //           opacity += 0.1;
  //           cryingIcon.style.opacity = opacity;
  //         } else {
  //           clearInterval(intervalID);
  
  //           // Thêm bảng dòng chữ "Mình xin lỗi"
  //           var apologyText = document.createElement("div");
  //           apologyText.textContent = "em biết mà, chị cũng vậy ó, kaka ^^";
  //           apologyText.style.position = "fixed";
  //           apologyText.style.top = "19%";
  //           apologyText.style.left = "50%";
  //           apologyText.style.transform = "translateX(-50%)";
  //           apologyText.style.fontSize = "24px";
  //           apologyText.style.fontWeight = "bold";
  //           apologyText.style.color = "blue";
  //           apologyText.style.zIndex = "9999";
  
  //           // Thêm dòng chữ vào body
  //           document.body.appendChild(apologyText);
  
  //           // Ẩn icon và bảng dòng chữ sau một khoảng thời gian
  //           setTimeout(function () {
  //             var iconOpacity = 1;
  //             var textOpacity = 1;
  
  //             var iconIntervalID = setInterval(function () {
  //               if (iconOpacity > 0) {
  //                 iconOpacity -= 0.1;
  //                 cryingIcon.style.opacity = iconOpacity;
  //               } else {
  //                 clearInterval(iconIntervalID);
  //                 document.body.removeChild(cryingIcon);
  //               }
  //             }, 500);
  
  //             var textIntervalID = setInterval(function () {
  //               if (textOpacity > 0) {
  //                 textOpacity -= 0.1;
  //                 apologyText.style.opacity = textOpacity;
  //               } else {
  //                 clearInterval(textIntervalID);
  //                 document.body.removeChild(apologyText);
  //               }
  //             }, 700);
  //           }, 20000); // 25 giây (15000 milliseconds)
  //         }
  //       }, 500);
  //     }, 400); // Chờ 0.4 giây trước khi phát nhạc (1000 milliseconds)
  //   }, 0); // Thực thi ngay sau khi giao diện được tải lại
  // });
  
  
  
  // document.getElementById("yes").addEventListener("click", function () {
  //   // Hiển thị icon "crying.gif" ở giữa màn hình
  //   var cryingIcon = document.createElement("img");
  //   cryingIcon.src = "img/cuteCat.jpg";
  //   cryingIcon.alt = "Crying Icon";
  //   cryingIcon.style.position = "fixed";
  //   cryingIcon.style.top = "33%";
  //   cryingIcon.style.left = "50%";
  //   cryingIcon.style.width = "120px";  // Điều chỉnh chiều rộng
  //   cryingIcon.style.height = "120px"; // Điều chỉnh chiều cao
  //   cryingIcon.style.opacity = 0; // Đặt opacity ban đầu là 0
  //   cryingIcon.style.transform = "translate(-50%, -50%)";
  //   cryingIcon.style.zIndex = "9999";
  
  //   // Thêm icon vào body
  //   document.body.appendChild(cryingIcon);
  
  //   // Dừng âm thanh hiện tại trước khi phát âm thanh mới
  //   stopCurrentAudio();
  
  //   // Chờ 1 giây trước khi phát nhạc
  //   setTimeout(function () {
  //     var audio = new Audio("sound/short_tuyHN.mp3");
  //     audio.play();
  //     currentAudio = audio;
  
  //     // Tăng opacity dần để icon xuất hiện
  //     var opacity = 0;
  //     var intervalID = setInterval(function () {
  //       if (opacity < 1) {
  //         opacity += 0.25;
  //         cryingIcon.style.opacity = opacity;
  //       } else {
  //         clearInterval(intervalID);
  
  //         var apologyText = document.createElement("div");
  //         apologyText.textContent = "Nếu vậy chị có thể ra mess fb nhắn em dc hem !!";
  //         apologyText.style.position = "fixed";
  //         apologyText.style.top = "19%";
  //         apologyText.style.left = "50%";
  //         apologyText.style.transform = "translateX(-50%)";
  //         apologyText.style.fontSize = "24px";
  //         apologyText.style.fontWeight = "bold";
  //         apologyText.style.color = "blue";
  //         apologyText.style.zIndex = "9999";
  
  //         // Thêm dòng chữ vào body
  //         document.body.appendChild(apologyText);
  
  //         // Ẩn icon và bảng dòng chữ sau một khoảng thời gian
  //         setTimeout(function () {
  //           var iconOpacity = 1;
  //           var textOpacity = 1;
  
  //           var iconIntervalID = setInterval(function () {
  //             if (iconOpacity > 0) {
  //               iconOpacity -= 0.25;
  //               cryingIcon.style.opacity = iconOpacity;
  //             } else {
  //               clearInterval(iconIntervalID);
  //               document.body.removeChild(cryingIcon);
  //             }
  //           }, 300);
  
  //           var textIntervalID = setInterval(function () {
  //             if (textOpacity > 0) {
  //               textOpacity -= 0.1;
  //               apologyText.style.opacity = textOpacity;
  //             } else {
  //               clearInterval(textIntervalID);
  //               document.body.removeChild(apologyText);
  //             }
  //           }, 300);
  //         }, 5000); 
  //       }
  //     }, 500);
  //   }, 400); // Chờ 0.4 giây trước khi phát nhạc (1000 milliseconds)
  // });
  
  ///////////////////////////////////
  document.getElementById("no").addEventListener("click", function () {
    handleButtonClick('no');
  });
  
  document.getElementById("hate").addEventListener("click", function () {
    handleButtonClick('hate');
  });
  
  document.getElementById("yes").addEventListener("click", function () {
    handleButtonClick('yes');
  });
  
  function handleButtonClick(buttonId) {
    console.log("Button clicked:", buttonId);
  
    // Dừng âm thanh hiện tại trước khi phát âm thanh mới
    stopCurrentAudio();
  
    // Xóa icon và dòng chữ hiện tại (nếu có)
    removeCurrentIconAndText();
  
    // Phát âm thanh mới (nếu cần)
    var audioSrc = '';
    switch (buttonId) {
      case 'no':
        audioSrc = "sound/short_HopeYou.mp3";
        break;
      case 'hate':
        audioSrc = "sound/short_tuyHN.mp3";
        break;
      case 'yes':
        audioSrc = "sound/your_audio_file.mp3"; // Thay đổi thành đường dẫn tới file âm thanh cho nút 'yes'
        break;
    }
  
    if (audioSrc !== '') {
      var audio = new Audio(audioSrc);
      audio.play();
      currentAudio = audio;
    }
  
    // Hiển thị icon và dòng chữ mới (nếu cần)
    var iconSrc = '';
    var apologyMessage = '';
    switch (buttonId) {
      case 'no':
        iconSrc = "img/cute.gif";
        apologyMessage = "Mình biết mà, You too, kaka ^^";
        break;
      case 'hate':
        iconSrc = "img/cry.gif";
        apologyMessage = "Mình xin lũi";
        break;
      case 'yes':
        iconSrc = "img/cuteCat.jpg";
        apologyMessage = "Nếu vậy you có thể ra mess fb nhắn mình dc hem !!";
        break;
    }
  
    if (iconSrc !== '' && apologyMessage !== '') {
      showIconAndMessage(iconSrc, apologyMessage);
    }
  }
  
  function removeCurrentIconAndText() {
    var currentIcon = document.querySelector(".crying-icon");
    var currentText = document.querySelector(".apology-text");
  
    if (currentIcon) {
      currentIcon.parentNode.removeChild(currentIcon);
    }
  
    if (currentText) {
      currentText.parentNode.removeChild(currentText);
    }
  }
  
  function showIconAndMessage(iconSrc, message) {
    var cryingIcon = document.createElement("img");
    cryingIcon.src = iconSrc;
    cryingIcon.alt = "Crying Icon";
    cryingIcon.classList.add("crying-icon"); 
    cryingIcon.style.position = "fixed";
    cryingIcon.style.top = "33%";
    cryingIcon.style.left = "50%";
    cryingIcon.style.width = "120px";  
    cryingIcon.style.height = "120px"; 
    cryingIcon.style.opacity = 0;
    cryingIcon.style.transform = "translate(-50%, -50%)";
    cryingIcon.style.zIndex = "9999";
    document.body.appendChild(cryingIcon);
  
    var apologyText = document.createElement("div");
    apologyText.textContent = message;
    apologyText.classList.add("apology-text"); 
    apologyText.style.position = "fixed";
    apologyText.style.top = "19%";
    apologyText.style.left = "50%";
    apologyText.style.transform = "translateX(-50%)";
    apologyText.style.fontSize = "24px";
    apologyText.style.fontWeight = "bold";
    apologyText.style.color = "blue";
    apologyText.style.zIndex = "9999";
    document.body.appendChild(apologyText);
  
    // Tăng opacity dần để icon và dòng chữ xuất hiện
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        cryingIcon.style.opacity = opacity;
        apologyText.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 100);
  }
  
  });
  
  function handleButtonClick(buttonId) {
    console.log("Button clicked:", buttonId);
  }