        var b = [];
        var h = [];
        var k = [];
        k[0] = "x"; k[1] = "x"; k[2] = "x";
        console.log(k[4]);
        if (k[0] == k[1] && k[1] == k[2]) { console.log("yes");}
        else { console.log("no"); }
        var s = 9;
        var winner = 0;
        var l=0;
       
        function wr(e) {
            if(h[e]!=undefined || l==1) {
                if(l==1)  {alert(" GAME OVER ")}
                else {alert("this is not available")}}
            else{   s--;
                b[e] = e;
                
            var f = document.getElementById(e);
            console.log(e);
                f.style.backgroundColor = "rgb(220 97 136)";
                document.getElementById(b[e]).innerHTML = "x";
            h[e] = "x";
            
            generate(e);
            for (var i = 0; i < 9; i++) 
            { console.log("h " + i + "is " + h[i]); }
            l= checkw();
            console.log("  win  " + winner);
            console.log("l : " + l);
            if (l == 1) { win(); }
                
            } }
        
        function generate(em) {
            var i, n; s--;
            if (s >= 0) {
                
                do { n = Math.floor(Math.random() * 9); }
                while (b[n] != undefined);
                b[n] = n;
                h[n] = "o";
                var v = document.getElementById(n);
                v.style.backgroundColor = "rgb(220 97 136)";
                document.getElementById(n).innerHTML = "o";
                
                return n;
               
            } else {


                win();
            }
            
            
           
            
        }
        function win() {

                 
             if ((h[0] == h[1] && h[1] == h[2]) || (h[3] == h[4] && h[4] == h[5]) || (h[6] == h[7] && h[7] == h[8]))
              {   checkw();
                var w = document.getElementById("win");
                if (winner=="x") { w.innerHTML=("you win"); }
                 else  { w.innerHTML=("you lose");} 
            }
            else if ((h[0] == h[3] && h[3] == h[6]) || (h[1] == h[4] && h[4] == h[7]) || (h[2] == h[5] && h[5] == h[8]))
             {    checkw();
                var w = document.getElementById("win");
                if (winner=="x") { w.innerHTML=("you win"); }
                 else { w.innerHTML=("you lose"); }

            }
            else if ((h[0] == h[4] && h[4] == h[8]) || (h[2] == h[4] && h[4] == h[6])) 
            {  checkw();
                var w = document.getElementById("win");
                if (winner=="x") { w.innerHTML=("you win"); }
                 else { w.innerHTML=("you lose"); }
            }
            else {

                var w = document.getElementById("win");
                w.innerHTML=("its tie");

            }
        
        }
        function checkw() {
            if ((h[0] == h[1] && h[1] == h[2]) && h[0] != undefined && h[1] != undefined && h[2] != undefined) { winner = h[0]; return 1; }
            else if (h[3] == h[4] && h[4] == h[5] && h[3] != undefined && h[4] != undefined && h[5] != undefined) { winner = h[3]; return 1;}
            else if (h[6] == h[7] && h[7] == h[8] && h[6] != undefined && h[7] != undefined && h[8] != undefined) { winner = h[6]; return 1;}
            else if (h[0] == h[3] && h[3] == h[6] && h[0] != undefined && h[3] != undefined && h[6] != undefined) { winner = h[0]; return 1; }
            else if (h[1] == h[4] && h[4] == h[7] && h[1] != undefined && h[4] != undefined && h[7] != undefined) { winner = h[1]; return 1; }
            else if (h[2] == h[5] && h[5] == h[8] && h[2] != undefined && h[5] != undefined && h[8] != undefined) { winner = h[2]; return 1;}
            else if (h[0] == h[4] && h[4] == h[8] && h[0] != undefined && h[4] != undefined && h[8] != undefined) { winner = h[0]; return 1; }
            else if (h[2] == h[4] && h[4] == h[6] && h[2] != undefined && h[4] != undefined && h[6] != undefined) { winner = h[2]; return 1; }
            else { winner = 0; return 0; }
        }

        function res() {
            h = [];
            b = [];
            s=9;
            l=0;
            for (var i = 0; i < 9; i++) {
                document.getElementById(i).innerHTML = " ";
                document.getElementById(i).style.background = "rgb(146 81 81)";

            } 
            var w = document.getElementById("win");
            w.innerText = ""; 
            console.log(h);
        }
        