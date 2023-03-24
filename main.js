const kings=[
{
	f_name:"Mariya",
	l_name:"Kingsly"
},
{
	f_name:"Anto",
	l_name:"Anstin"
},
{
	f_name:"Sathish",
	l_name:"Kumar"
}
];
var a=[];
kings.map(function(value)
{
	a.push(value.l_name);
});
console.log(a);