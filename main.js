var module_13= document.getElementById('open-modal3');
var i = 0;
let d = 0;
document.querySelector('.fa-dice-d20').addEventListener('click', () => {
    const popUp = `<div id="pop-up">

    <header>
      <p id="para-part-2">Add new list</header></p>
    </header>

    <section>
        <div id="input-div">
      <form>
         <input type="text" placeholder="write text to add list" id="todo-input">
      </form>
        </div>
    </section>

    <footer>
      <div id="pop-up-btn">
        <div style="margin-left:2em">
          <button class="btn" id="add-btn">Add</button>
      </div>
      <div style="margin-right:2em">
        <button class="btn" id="close-btn">Close</button>
      </div>
    </div>
    </footer>

</div>`

document.querySelector('#pop-up-index').innerHTML = popUp;

// making todo lists
todo = ` <div class="list-pop-up-div">
<header id="input-head">
    <p class="para-head"></p><hr />
</header>

      <div id="lists" class="markdone">
          
      </div>

<div id="flex-awesome">
  <i class="fa-brands fa-teamspeak"></i>
  <i class="fa-solid fa-dragon"></i>
</div>
</div>`

paraClick = ` <header>
<div id="top-div">

  <div id="heading">
    <h1>Tasks List</h1>
  </div>

  <div id="awesome-btn">
    <p id="para">Add item</p>
    <i class="fa-solid fa-dice-d20"></i>
  </div>

</div>
</header>
<hr />`

// add pop - up
  document.querySelector('#add-btn').addEventListener('click', () => {
    valueInput = document.querySelector('#todo-input').value


    document.querySelector('.lists-div').innerHTML += todo;
    let arr = document.querySelectorAll('.para-head');
    do {
      arr[i].textContent = valueInput;
      i++
      document.querySelector('#pop-up').style.visibility = "hidden";
    }while(false);


  // making para click container
    paraBox = `<div class="para-click">
    <header>
      <div id="top-div">
  
        <div id="heading">
          <i class="fa-brands fa-wolf-pack-battalion"></i>
          <h1 id="back-heading">Back</h1>
        </div>
  
          <p class="card-chosen"></p>
  
        <div id="awesome-btn">
          <p id="para">Add item</p>
          <i class="fa-solid fa-dice-d20" id="fa-dice"></i>
        </div>
  
      </div>
    </header>
    <hr />
   </div> `

    let helloMe = document.querySelector('#hello-me');
    let know = document.querySelectorAll('.list-pop-up-div')
    let specialCard = document.querySelector('#special-card');

    for(let para = 0; para < arr.length; para++) {

      arr[para].addEventListener('click', () => {
        helloMe.innerHTML = paraBox;
        document.querySelector('.lists-div').style.display = "none"
        document.querySelector('#part-1-header').style.display = "none"
        document.querySelector('#special-card').appendChild(know[para])
        document.querySelector('.card-chosen').textContent = arr[para].textContent
     
    
 // back - btn
      document.querySelector('.fa-wolf-pack-battalion').addEventListener('click', () => {
        document.querySelector('.lists-div').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#hello-me').style.display = "none"
        document.querySelector('.lists-div').appendChild(specialCard);
        
     }); 

  
     // fa-dice add button
     document.querySelector('#fa-dice').addEventListener('click', () => {
      document.querySelector('#pop-up-index').innerHTML = popUp;

      
      // add
      document.querySelector('#add-btn').addEventListener('click', () => {
        
          ++i;
        document.querySelector('.lists-div').innerHTML += todo
        document.querySelector('.lists-div').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#hello-me').style.display = "none"
        document.querySelector('#pop-up').style.visibility = "hidden"
        document.querySelector('.lists-div').appendChild(specialCard);
        console.log(i);
        var g =document.querySelectorAll(`.para-head`);
        console.log(g[i-2])
        g[i-2].textContent = document.querySelector('#todo-input').value
        
      }); // add end


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });  // close end


   }); // fa dice add button end


     }); // para-click end


    }     // for loop ends


    // add task
    let addBtn = document.querySelectorAll('.fa-brands');
    let addTask = document.querySelector('#pop-up-index');
    let addItemDiv = document.querySelectorAll('.markdone')

   for(let k = 0; k<arr.length; k++) {
    addBtn[k].addEventListener('click', () => {
      addTask.innerHTML = popUp;
      document.querySelector('#para-part-2').textContent = "Add New Items"

      // add
      document.querySelector('#add-btn').addEventListener('click', () => {

        addItemDiv[k].innerHTML += '<p class="lists"></p><button class="list-btn">mark done</button><br />'
        let addItem = document.querySelectorAll('.lists')
        let markDoneBtn = document.querySelectorAll('.list-btn')

      for(let a = 0; a < addItem.length; a++) {
        document.querySelector('#pop-up').style.visibility = "hidden";
        addItem[d].textContent = document.querySelector('#todo-input').value 
        markDoneBtn[a].style.visibility = "visible";

        markDoneBtn[a].addEventListener('click', () => {
          addItem[a].style.textDecoration = "line-through";
          markDoneBtn[a].style.display = "none";
          });

      }
          d++

      });


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });
});

   }


  // removing container task
    let deleteBtn = document.querySelectorAll('.fa-dragon');
    let remove = document.querySelectorAll('.list-pop-up-div');

   for(let j = 0; j<arr.length; j++) {
    deleteBtn[j].addEventListener('click', () => {
       remove[j].style.display = "none";
   });
   
   }
      
});


// close pop-up
document.querySelector('#close-btn').addEventListener('click', () => {
  document.querySelector('#pop-up').style.visibility = "hidden";
});

})


function trash_icon2(id) {
  var temp_box = document.getElementsByClassName('index_box');
  for (let i of temp_box) {
    if (i.classList[1] == id) {
      con_box.removeChild(i);
      count--;
    }
  }
  if(con_box.children.length==0){
    document.querySelector('.no_item').classList.remove('hidden');
  }
}

function new_page_fun(para){
  document.querySelector('.continer').classList.add('hidden');
  var temp=document.getElementsByClassName('index_box');
  for(let i of temp){
    if(i.classList[1]!=para.target.classList[1]){
      i.classList.add('hidden');
    }
    else{
      i.classList.add('hidden_page_element');
      module_13.style.display='flex';
      new_page_title.textContent= `${i.childNodes[0].textContent}`;
      console.log();
    }
  }
}

document.querySelector(".add_button").addEventListener("click", () => {
  if (inp_title.value == "") {
    closer();
  } else {
    var unique_id = new Date().valueOf();
    var box_obj = inp_title.value; 
    var temp_title = box_obj;
    box_obj = new Obj_Create(unique_id, temp_title); 
    object_arry.push(box_obj); 

    var box_div = document.createElement("div"); 
    box_div.classList.add("index_box", unique_id); 

    var p_tag = document.createElement("p"); 
    p_tag.classList.add("title", unique_id); 
    p_tag.textContent = inp_title.value; 
    p_tag.addEventListener('click', function (obj_new_page){
      new_page_fun(obj_new_page);
    });

    box_div.append(p_tag); 
    
    box_div.append(document.createElement("hr")); 

    var task_box = document.createElement("div"); 
    task_box.classList.add("task_box", unique_id); 
    box_div.append(task_box); 
    
    var task_icon1 = document.createElement("div"); 
    task_icon1.classList.add("task_icon");
    
    var task_plus1 = document.createElement("i"); 
    task_plus1.classList.add("fas", "fa-plus-circle", "task_plus", unique_id);
    task_icon1.append(task_plus1); 

    var task_trash1 = document.createElement("i"); 
    task_trash1.classList.add("fas", "fa-trash-alt", "task_trash", unique_id);
    task_icon1.append(task_trash1); 
    box_div.append(task_icon1); 

    con_box.append(box_div); 

    plus_icon01 = document.getElementsByClassName("task_plus");
    plus_icon01[count].addEventListener('click', function (count) {
      plus_icon2(count.target.classList[3]);
    });

    trash_icon01 = document.getElementsByClassName("task_trash");
    trash_icon01[count].addEventListener('click', function (count) {
      trash_icon2(count.target.classList[3]);
    });
    count++;
    if(con_box.children.length>=0){
      document.querySelector('.no_item').classList.add('hidden');
    }
    closer(); 
  }
});