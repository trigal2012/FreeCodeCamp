$(document).ready(function(){

    //setting up variables
    var formula = [];
    var tempNum = [];
    var formulaStr = "";
    var result = 0;
    $('#display').empty();
    $('#result').empty();

    //monitor what's clicked
    $('button').click(function(id){
      console.log(id);
      //checks to see if user clicked on all clear button
      if(id.currentTarget.innerHTML != "AC"){
        //checks for a number
        if(!isNaN(id.currentTarget.innerHTML)){
          tempNum.push(id.currentTarget.innerHTML);
          $("#operators").children().prop('disabled',false);
          $('#display').append(function(){
            return "<b>"+id.currentTarget.innerHTML+ " </b>";
          });
        } else{
          formula.push(tempNum.join(''));
          tempNum = [];
          formula.push(id.currentTarget.innerHTML);
          $("#operators").children().prop('disabled',true);
          $("#numbers").children().prop('disabled',false);
          $('#display').append(function(){
            return "<b>"+id.currentTarget.innerHTML+ " </b>";
          });
          
          //checks if equal sign was clicked
          if(id.currentTarget.innerHTML=== "="){
            $("#operators").children().prop('disabled',false);
            $("#numbers").children().prop('disabled',true);
            formula.pop();
            formulaStr=formula.join('');
            formula = [];
            if(result === 0){
              result = eval(formulaStr);
              $('#display').empty();
              $('#display').append(function(){
                return "<b>"+result+ " </b>";
              });
              $('#result').empty();
              $('#result').append(function(){
                return "<b>"+result+ " </b>";
              });
              console.log(result);
            } else {
              tempForm = [result,formulaStr];
              formulaStr2 = tempForm.join('');
              result = eval(formulaStr2);
              $('#display').empty();
              $('#display').append(function(){
                return "<b>"+result+ " </b>";
              });
              $('#result').empty();
              $('#result').append(function(){
                return "<b>"+result+ " </b>";
              });
              console.log(result);
            }

          } 
        
        }
      } else {
        formula = [];
        tempNum = [];
        formulaStr = "";
        result = 0;
        $('#display').empty();
        $('#result').empty();
        $("#operators").children().prop('disabled',true);
        $("#numbers").children().prop('disabled',false);
      }
    }); //end of button click action
      
  });//end of document ready