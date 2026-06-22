let invoiceItems = [];

function addItem(){

const item =
document.getElementById("itemName").value;

const qty =
Number(document.getElementById("qty").value);

const rate =
Number(document.getElementById("rate").value);

const amount = qty * rate;

invoiceItems.push({
 item,
 qty,
 rate,
 amount
});

renderItems();
}

function renderItems(){

const tbody =
document.querySelector(
"#invoiceTable tbody"
);

tbody.innerHTML = "";

invoiceItems.forEach(row=>{

tbody.innerHTML += `
<tr>
<td>${row.item}</td>
<td>${row.qty}</td>
<td>${row.rate}</td>
<td>${row.amount}</td>
</tr>
`;

});

calculateTotals();
}

function calculateTotals(){

const subtotal =
invoiceItems.reduce(
(sum,item)=>sum+item.amount,
0
);

const cgst =
subtotal * 0.025;

const sgst =
subtotal * 0.025;

const total =
subtotal + cgst + sgst;

document.getElementById(
"totals"
).innerHTML = `

<p>Subtotal : ₹${subtotal.toFixed(2)}</p>

<p>CGST (2.5%) :
₹${cgst.toFixed(2)}</p>

<p>SGST (2.5%) :
₹${sgst.toFixed(2)}</p>

<h3>Total :
₹${total.toFixed(2)}</h3>

`;
}
