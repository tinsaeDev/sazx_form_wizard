


/** 
 * A files store. a common store to access a file from local or url
 * WIth Change Subscription Support
*/
let files = {

     changeSubscribers : {

     },

    addFile(  fileName ,file ){
       this[fileName]=file;

       if( this.changeSubscribers[fileName]!==undefined ){
           this.changeSubscribers[fileName].forEach( subscriberCallBack=>{
               subscriberCallBack( new Event("changed") );
           } );
       }

    },

    addChangeListener(fileName, callback){
        if( this.changeSubscribers[fileName]===undefined  ){
            this.changeSubscribers[fileName] = [];
        }
       let id = this.changeSubscribers[fileName].push( callback );
       return id;
    }

}

/**
 * A helper function that handles tab clickes, and switches between active tabs
 * @param {*} event 
 */
function tabClick(event){


    let tabButton = event.target;
    let tabView = tabButton.closest(".tab-view");

    let tabName = tabButton.getAttribute("for");
    let tab = tabView.querySelector(".body .tab#"+tabName);


    let activeTabButton = tabView.querySelector(".header .button.active");
    let activeTab = tabView.querySelector(".body .tab.active");

    activeTabButton.classList.remove("active");
    activeTab.classList.remove("active");


    tab.classList.add("active")
    tabButton.classList.add("active")

    console.log( tab );
}


/**
 * :Begin Custom file chooser related functions
 */

function fileChooserClicked(event){

    let button = event.target;
    let fileInput = button.closest(".file-input");
    fileInput.querySelector(".input").click();
}

function fileChooserChanged(event){
    let input = event.target;
    let sazxFileInput = input.closest(".file-input");
    let fileNameOutput = sazxFileInput.querySelector(".file-name");
    fileNameOutput.innerText = input.files[0].name;

    /**
     * Update the files store
     */

    files.addFile( input.name,input.files[0] );
}

/**
 * :End Custom file chooser related functions
 */

/**
 * :Begin Formula Editor Related functions
 */

// Handle the click event of formula editor variable button
function variableClicked(event){


}

// Handles input event for the formula editor
function formulaEditorInputed(event){

    let target = event.target;
    let inputCharacter = event.key;

    // Allow user to manualy input only numbers
    console.log( event );
    let isInteger =  Number.isInteger( Number.parseInt( inputCharacter ) );
    let isPoint = inputCharacter=="."?true : false;
    if(  !( isInteger || isPoint )  ){
        // event.preventDefault();        
    }
    
}

function operatorClicked(event){

    let target = event.target;
// The whole editor with buttons
    let formulaEditor = target.closest(".formula-editor");
    // The input editor
    let inputEditor =formulaEditor.querySelector(".editor");

    let selection = document.getSelection();
    let focusNode = selection.focusNode;


    // varibale / operator template

    let operatorTemplate = formulaEditor.querySelector(".template-operator");
    let operator = operatorTemplate.content.firstElementChild.cloneNode(true);

    let operatorCode = target.dataset.code;

    operator.innerText = operatorCode;
    operator.dataset.code = operatorCode;

    function getCaretIndex(element) {
        let position = 0;
        const isSupported = typeof window.getSelection !== "undefined";
        if (isSupported) {
          const selection = window.getSelection();
          if (selection.rangeCount !== 0) {
            const range = window.getSelection().getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            position = preCaretRange.toString().length;
          }
        }
        return position;
      }

    let caretIndex = getCaretIndex( inputEditor  );
    console.log( caretIndex );
    
    inputEditor.append( operator );
    inputEditor.append( document.createTextNode(":") );

    inputEditor.focus();

}


/**
 * :End Formula Editor Related functions
 */
