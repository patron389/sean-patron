const scrollers = document.querySelectorAll(".scroller");
const scrollers2 = document.querySelectorAll(".scroller2");
const burgerMenu = document.querySelector(".burger__menu");
const mainMenu = document.querySelector(".main__nav");
const body = document.querySelector("body");
const navLists = document.querySelectorAll(".nav__item");

const toggleMenu = function () {
  burgerMenu.classList.toggle("active");
  mainMenu.classList.toggle("visible");
  body.classList.toggle("no__scroll");
};

burgerMenu.addEventListener("click", () => {
  toggleMenu();
});

navLists.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    toggleMenu();
  });
});

const addAnimation = function () {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    // console.log(scrollerInner);
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
};

// this is for MY PRIDE MY WORK SECTION
const addAnimation2 = function () {
  scrollers2.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
  addAnimation2();
}

// ---------------------------------------------------------
const hideHeaderOnScroll = function () {
  const header = document.querySelector("header");
  const logoBox = document.querySelector(".logo__box");
  let prevScrollCountPosition = 0;

  // Add event listener to the window for the scroll event
  window.addEventListener("scroll", function () {
    const currScrollCountPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Hide header if scrolling down, show header if scrolling up
    if (currScrollCountPosition > prevScrollCountPosition) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
    prevScrollCountPosition = currScrollCountPosition;

    // Change header background and box shadow if scrolled down 200px or more
    if (currScrollCountPosition >= 200) {
      header.style.padding = "3rem 0";
      header.style.background = "rgb(245, 245, 241, 0.98  )";
      header.style.boxShadow = "1px 8px 20px 1px rgba(63, 27, 2, 0.2)";
      logoBox.style.width = "7rem";
    } else {
      // Reset background and box-shadow to default if scrolled up less than 200px
      header.style.background = "";
      header.style.boxShadow = "";
      logoBox.style.width = "9rem";
      header.style.padding = "4rem 0";
    }
  });
};

// Call the hideHeaderOnScroll function to initialize the functionality
hideHeaderOnScroll();

// Cursor
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".project__item").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".project__item").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

// // Select the circle element
// const circleElement = document.querySelector(".circle");

// // Create objects to track mouse position and custom cursor position
// const mouse = { x: 0, y: 0 }; // Track current mouse position
// const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
// const circle = { x: 0, y: 0 }; // Track the circle position

// // Initialize variables to track scaling and rotation
// let currentScale = 0; // Track current scale value
// let currentAngle = 0; // Track current angle value

// // Update mouse position on the 'mousemove' event
// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
// const speed = 0.17;

// // Start animation
// const tick = () => {
//   // MOVE
//   // Calculate circle movement based on mouse position and smoothing
//   circle.x += (mouse.x - circle.x) * speed;
//   circle.y += (mouse.y - circle.y) * speed;
//   // Create a transformation string for cursor translation
//   const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

//   // SQUEEZE
//   // 1. Calculate the change in mouse position (deltaMouse)
//   const deltaMouseX = mouse.x - previousMouse.x;
//   const deltaMouseY = mouse.y - previousMouse.y;
//   // Update previous mouse position for the next frame
//   previousMouse.x = mouse.x;
//   previousMouse.y = mouse.y;
//   // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
//   const mouseVelocity = Math.min(
//     Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
//     150
//   );
//   // 3. Convert mouse velocity to a value in the range [0, 0.5]
//   const scaleValue = (mouseVelocity / 150) * 0.5;
//   // 4. Smoothly update the current scale
//   currentScale += (scaleValue - currentScale) * speed;
//   // 5. Create a transformation string for scaling
//   const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

//   // ROTATE
//   // 1. Calculate the angle using the atan2 function
//   const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
//   // 2. Check for a threshold to reduce shakiness at low mouse velocity
//   if (mouseVelocity > 20) {
//     currentAngle = angle;
//   }
//   // 3. Create a transformation string for rotation
//   const rotateTransform = `rotate(${currentAngle}deg)`;

//   // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
//   circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

//   // Request the next frame to continue the animation
//   window.requestAnimationFrame(tick);
// };

// // Start the animation loop
// tick();
