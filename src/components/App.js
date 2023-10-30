import React, { useEffect, useRef } from 'react';

const App = () => {
  const svgContainerRef = useRef();

  useEffect(() => {
    // Fetch the SVG from the public folder and inject it into the div
    fetch('assets/My_License1.svg')  
      .then(response => response.text())
      .then(svgString => {
        svgContainerRef.current.innerHTML = svgString;

        // Access the embedded SVG element
        const svgElement = svgContainerRef.current.querySelector('svg');

        // Function to update SVG text based on id
        const updateTextById = (id, newText) => {
          const element = svgElement.getElementById(id);
          if (element) element.textContent = newText;
        };

// Update the SVG text fields
        updateTextById('textFNLN', 'MCKAY, DAVE');
        updateTextById('textStreetAddress', '34 KIPLING PINE AVE ETOBICOKE ON, L2V 1T6');
        updateTextById('textNumero', 'D 1023-7633-82292');
        updateTextById('textExpiryDdate', '2029/01/23');
        updateTextById('textIssueDate', '2023/10/29');
        updateTextById('textReferenceNumber', 'D912341003');
        updateTextById('textHeight' , '186 cm');
        updateTextById('textGender', 'M');
        updateTextById('textCategory', 'G2');
        updateTextById('textDOB', '1999/10/29');


        // Function to update image based on id
       const updateImageById = (id, newImageSrc) => {
          const imageElement = svgElement.getElementById(id);
          if (imageElement) {
            // Using 'xlink:href' since 'href' might not work for embedded SVGs
            imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', newImageSrc);
          }
        };

        // Update the SVG image
        // The new image is 'manImage.jpg' and is located in the Public folder
        updateImageById('ladyImage', '/manImage.jpg');
        })
      .catch(error => {
        console.error("Error fetching SVG:", error);
      });
  }, []);

  return (
    <div ref={svgContainerRef}>
      {/* SVG will be injected here */}
    </div>
  );
};

export default App;
