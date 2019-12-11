//..load git apis...
//communicate bw local n guthub server
const api="https://api.github.com/users";
    window.fetch(api).then(data=>
    {
         data.json().then(users=>
        {
            var output=[];
            for(let user of users)
            {
                
                output+=`<div class="container"><table class="table table-bordered mt-4">
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>photo</th>
                <th>repo</th>
                <th>url</th>
                </tr>
                <tr>
                <td>${user.id}</td>
                <td>${user.login}</td>
                <td><img style="width:100px;
                        height:100px;border-radius:100% 
                        src="${user.avatar_url}"></td>
                <td>${user.repos_url}</td>
                <td>${user.url}</td>
                </tr>
                </table>
                </div>`;
                 document.getElementById("template").innerHTML=output;
             }
        }
    ).catch(err=>console.log(err));
    }).catch(err=>console.log(err));

