document.write('<h1 class="header">Доход водителей</h1>');
document.write('<table style = "border: 1px solid black">');

document.write(`
    <tr>
        <th>№</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Поездок в месяц</th>
        <th>Доход в месяц</th>
        <th>Средняя стоимость поездки</th>
    </tr>
`)

// let drivers = Number(prompt("Сколько водителей будет: "));
let drivers = 2;

let resDrive = 0;
let resCost = 0;
let resCostMidl = 0;
let result = 0;

for (let i = 1; i <= drivers; i++) {
    // let name = prompt(`Введите имя водителя ${i}`);
    let name = `имя ${i}`;
    // let surName = prompt(`Введите фамилию водителя ${i}`);
    let surName = `фамилия ${i}`;
    // let drive = Number(prompt(`Сколько ${name} ${surName} обработал заказов в месяц`));
    let drive = 2 + i;
    // let cost = Number(prompt(`Сколько ${name} ${surName} получил в месяц`));
    let cost = 1000 + (i * 345);
    resDrive = resDrive + drive
    resCost = resCost + cost

    document.write(`
    <tr>
    <td>${i}</td>
    <td>${name}</td>
    <td>${surName}</td>
    <td>${drive}</td>
    <td>${cost}</td>
    <td>${resCosts = cost / drive}</td>
    </tr>
    `)

    resCostMidl = resCostMidl + resCosts

    if (i === drivers) {
        document.write(`
        <tr>
            <td colspan="3"><strong>Средние показатели всех водителей</strong></td>
            <td><strong>${Math.floor(resDrive / drivers)}</strong></td>
            <td><strong>${Math.floor(result = resCost / drivers)}</strong></td>
            <td><strong>${Math.floor(resCostMidl / drivers)}</strong></td>
        </tr>
        </table>
        `)
    }
}