
						var c=document.getElementById('myCanvas');
						var tcolourdb = localStorage.getItem('tshirtcolour');
						var ctx=c.getContext('2d');
						ctx.beginPath();
						ctx.lineTo(101,24 );
						ctx.lineTo(57,35 );
						ctx.lineTo(5,88 );
						ctx.lineTo(32,132 );
						ctx.lineTo(54,124 );
						ctx.lineTo(55,252 );
						ctx.lineTo(226,252 );
						ctx.lineTo(226,124 );
						ctx.lineTo(248,132 );
						ctx.lineTo(276,88 );
						ctx.lineTo(227,35 );
						ctx.lineTo(182,24 );
						ctx.bezierCurveTo(182,24,141,63,101,24);
						ctx.closePath();
						ctx.fillStyle=tcolourdb;
						ctx.fill();
						ctx.fillStyle = localStorage.getItem('fontcolour');
						ctx.font=localStorage.getItem('fontsize');
						ctx.fillText(localStorage.getItem('text'),localStorage.getItem('textposX'),localStorage.getItem('textposY'));
						
						var ctxoutline=c.getContext('2d');
						ctxoutline.beginPath();
					    ctxoutline.lineTo(101,24 );
						ctxoutline.lineTo(57,35 );
						ctxoutline.lineTo(5,88 );
						ctxoutline.lineTo(32,132 );
						ctxoutline.lineTo(54,124 );
						ctxoutline.lineTo(55,252 );
						ctxoutline.lineTo(226,252 );
						ctxoutline.lineTo(226,124 );
						ctxoutline.lineTo(248,132 );
						ctxoutline.lineTo(276,88 );
						ctxoutline.lineTo(227,35 );
						ctxoutline.lineTo(182,24 );
						ctxoutline.bezierCurveTo(182,24,141,63,101,24);
						ctxoutline.closePath();
						ctxoutline.stroke();
						
						var ctxleftsleeve=c.getContext('2d');
						ctxleftsleeve.beginPath();
						ctxleftsleeve.bezierCurveTo(54,124,68,84,57,35);
						ctxleftsleeve.stroke();
						
						var ctxrightsleeve=c.getContext("2d");
						ctxrightsleeve.beginPath();
						ctxrightsleeve.bezierCurveTo(226,124,208,84,227,35);
						ctxrightsleeve.stroke();
						
						var ctxcollar=c.getContext("2d");
						ctxcollar.beginPath();
						ctxcollar.lineTo(101,24 );
						ctxcollar.lineTo(107,20 );
						ctxcollar.bezierCurveTo(107,20,135,50,177,20);
						ctxcollar.lineTo(177,20 );
						ctxcollar.lineTo(182,24 );
						ctxcollar.stroke();
						
						var ordersty;
						orderqty = localStorage.getItem("basketcount");
				