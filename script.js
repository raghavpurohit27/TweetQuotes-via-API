const quotes =document.getElementById('quotes');
        const author =document.getElementById('author');
        const newq=document.getElementById('newq');
        const tweetme=document.getElementById("tweetme")
        
        let realdata = "";


        // const getnewquotes = () => {
        //     let rnum = Math.floor(Math.random() * 1000);
        //     console.log(rnum);

        // }
        const tweetnow =()=>{
            let tweetpost =`https://twitter.com/intent/tweet?text=${quotes.innerText}`;
            window.open(tweetpost);
            }

        const getquotes = async () => {

            const api = "https://api.quotable.io/random"
            try {
                let data = await fetch(api);
                realdata = await data.json();

                // getnewquotes();
                quotes.innerText=`${realdata.content} `;
                author.innerHTML=`- ${realdata.author}`;
                console.log(realdata.length);
                console.log(realdata.content);
                console.log(realdata.author);


            } catch (error) {

            }
        }
        newq.addEventListener("click",getquotes);
        tweetme.addEventListener("click",tweetnow);

        getquotes();