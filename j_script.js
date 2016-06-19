		function flip()
		{
			var b=document.getElementById('btn_1');
			if(b.value=="Unlike")
			{
				b.setAttribute('value',"Like");
				b.style.backgroundColor="cyan";
			}
			else if(b.value=="Like")
			{
				b.setAttribute('value',"Unlike");
				b.style.backgroundColor="red";
			}
		}

		function hide()
		{
			var rows=document.getElementById('t_body').childNodes;
			for(var i=1;i<rows.length;i++)
			{
				if(((i-1)/2)%2==0)
					rows[i].style.display="none";
			}
		}

		function enter()
		{
			var e=document.getElementById("input_value");
			var val=e.value;
			if(!(/^0|[1-9][0-9]*$/.test(val) || val==" " || val==""))
			{
				e.style.backgroundColor='red';
				e.setAttribute('readonly','true');
				setTimeout(function(){e.removeAttribute('readonly'); 
				e.style.backgroundColor='white';},5000);
			}
		}