updateDashboard();

function updateDashboard(){

const invoices =
getData(STORAGE_KEYS.invoices);

document.getElementById(
"totalInvoices"
).innerText = invoices.length;

let revenue = invoices.reduce(
(sum,item)=>
sum + Number(item.total || 0),
0
);

document.getElementById(
"totalRevenue"
).innerText =
"₹"+revenue.toFixed(2);
}
