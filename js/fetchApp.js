let currentPage=1;
let totalPage;

function getUsers(page){
    fetch('https://reqres.in/api/users?page=' + page, {
        method:'GET'
})
    .then(function(response){
        if(response.status !==200){
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData){
        var fragment = document.createDocumentFragment();

        responseData.data.forEach(item=>{
            let li = document.createElement('li');
            li.textContent =item.first_name;

            fragment.appendChild(li);
        });
        document.getElementById('list').innerHTML =' ';
        document.getElementById('list').appendChild(fragment);

        totalPage = responseData.total_pages;
    })
    .catch(function(error){
        if(error == 404){
            let p = document.createElement('p');
            p.textContent = 'Page Not Found';
            p.classList.add('error-text');

            document.getElementById('api').appendChild(p);
        }
        else{
            let p = document.createElement('p');
            p.textContent = 'Server Error';
            p.classList.add('error-text');

            document.getElementById('api').appendChild(p);
        }
    })
}
document.getElementById('previous').addEventListener('click', function(){
    if(currentPage===1){
        return;
    }
    currentPage -=1;
    getUsers(currentPage);
});

document.getElementById('next').addEventListener('click', function(){
    if(currentPage === totalPage){
        return;
    }
    currentPage +=1;
    getUsers(currentPage);
});

getUsers(currentPage);