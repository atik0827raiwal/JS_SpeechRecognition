var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''

recognition.continuous = true

recognition.onstart = function() {
    instructions.text("Voice Recognition is on")
    instructions.css("font-weight","Bold");
}

recognition.onspeechend = function() {
    content+=" "
    instructions.text("Press the Start Button")
    instructions.css("font-weight","Bold");
}

recognition.onerror = function() {
    instructions.text("Try Again")
    instructions.css("font-weight","Bold");
}

recognition.onresult = function() {
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    content += transcript
    textbox.val(content)

}

$('#start').click(function(event){
    if(content.length) {
        content += ''
    }
    recognition.start()
})

$('#stop').click(function(event){
    recognition.stop()
})

$('#clear').click(function(event){
    content = ''
    textbox.val(content)
})