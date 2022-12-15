overview: Create an application that places an object, image, symbol any of these when the user clicks their mouse on the web page. The object must be exactly where the user clicks, doesn't matter how many times they click, all objects must be rendered and kept track of. We also want 3 buttons, one button to undo the clicks and removes the symbols in the order that was clicked, for example user clicks 10 times then pushes undo button the 10th click is now removed. We will also want a button that applies a redo effect, previous example the 10th click was removed, clicking the redo will now re apply the 10th click where it was previously located, the last button will reset the application and remove all events. 







logical breakdown

observing these objectives step 1 create a react app, I will use Vite due to it being faster and more efficent than npx create-react-app. Once react is installed I'll clean up the files starting with a fresh project.
    step 1). install react with vite, -yarn create vite, -select react, -yarn, yarn dev.   
    step 1a). clean up files, prep blank page for react app.

step 2 we'ed want to setup the page layout so we could use a single div element the spans the entire body"page", I want to do this because it requests an object to be placed anywhere on the page not just within a specified range. So creating a <div></div> element that spans the entire body of the page would accomplish this. 
    step 2). Create div element that spans page.
        step 2a). css doc. body, div { margin: 0; padding: 0; width: 100%; height: 100vh;}
        this will allow the single div to span the entire page. 

step 3  setup function that registers clicks on page console.log it.
    step 3a). identify ? coords where click occured, can test this out on a button. 
    step 3b). once you have identifed "event.clientX, and event.clientY" as the coords setup storage, to store each click's values.
    setp 3c). make Icon appear on clicked spots.

* at this point we should have a div that spans the whole body, have an onclick funtion that stores the data of the clicks with client coords. Also an Icon that appears when clicked. 

step 4) develope a method with the undo button that removes last clicks upon button activation. 
    step 4a). button, onClick, pop? useState to manage storage and reset state with updated click removal.

step 5) add button functionality to the Redo button.
    step 5a) another usestate to managed the popped clicks.
    step 5b) button, onClick, pop from the popped clicks and re add it to the first useState re render updated clicks. 

step 6) add reset button
    step 6a). update both states to default empty arrays. 