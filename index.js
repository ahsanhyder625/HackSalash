// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll('.nav-link');

// selectElement('.burger-menu-icon').addEventListener('click', () => {
// 	selectElement('.nav-list').classList.toggle('active');
// 	selectElement('.burger-menu-icon').classList.toggle('toggle');

// 	navLinks.forEach((link, index) => {
// 		if (link.style.animation) {
// 			link.style.animation = '';
// 		} else {
// 			link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
// 			console.log(index / 7 + 0.5);
// 		}
// 	});
// });

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		selectElement('.nav-list').classList.toggle('active');
		selectElement('.burger-menu-icon').classList.toggle('toggle');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
				console.log(index / 7 + 0.5);
			}
		});
	});
})

document.getElementById('hello').addEventListener('click', function(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let error=document.getElementById('error_message')
	if (username==''||password=='') {
		error.textContent = 'Complete user details';
	} else {
			fetch('https://api.revvsales.com/api/v2/auth/initiate-auth', {
				method: 'POST',
				body: JSON.stringify({
					'user_email': username,
					'password': password,
					'org_domain': 'ftgm1g61'
				}),
				headers: {
					'Content-type': 'application/json',
					"GrantType": "password"
				}
			}).then((res)=>{
                console.log(res)
                res.json().then((data)=>{
                    if(data.User.access_token){
                        window.location.href='/dashboard.html'
                    }
                }).catch((e)=>{
                    error.textContent=e
                })
            })
    }
});

// function login() {
// 	let username = document.getElementById('username').value;
// 	let password = document.getElementById('password').value;
// 	if (username == '' || password == '') {
// 		document.getElementById('error_message').textContent = 'Complete user details';
// 	} else {
// 			fetch('https://api.revvsales.com/api/v2/auth/initiate-auth', {
// 				method: 'POST',
// 				body: JSON.stringify({
// 					'user_email': 'hyderahsan625@yahoo.com',
// 					'password': 'Ahsan@12345',
// 					'org_domain': 'ftgm1g61'
// 				}),
// 				headers: {
// 					'Content-type': 'application/json',
// 					"GrantType": "password"
// 				}
// 			}).then((response) =>  {
//                 console.log(response.body)
//                 response.json().then((data) => {
//                     console.log(data)
//             });
//         }
//     }
// }
// document.getElementById("hide").style.display = "hide";
// function add(){
//     document.getElementById("addstd").style.visibility
// }