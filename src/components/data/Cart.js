import sheetdb from 'sheetdb-node';
const client = sheetdb({ address: 'zhx6pde6mybzk' });

const getDataById = async (cid = "LU860f6bf696256cd073664c448acf2bf6-U809ebc60c8b4a9fd8518ec029ab35ef5") => {
    try {
        let column = encodeURIComponent("รหัสลูกค้า")
        let sheetname = encodeURIComponent("ออเดอร์")
        const res = await client.read({ sheet: sheetname, search: { [column]: cid } })
        return JSON.parse(res)
    } catch (error) {
        console.log(error);
    }
}

const addAmountCart = async (cid, product, amount = 1) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")
    let columnAmount = encodeURIComponent("ปริมาณ")

    try {
        console.log(cid + product);
        const res = await client.update(columnIdOrder, `${cid}${product}`, { "ปริมาณ": amount }, sheetname)
        console.log(res);

    } catch (error) {
        console.log(error);
    }
}

addAmountCart('LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5', 'Lyofast SAB442B', 2)

const changeCart = (
    amount = 1,
    product = 'Lyofast Y480F',
    custid = 'LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5') => {

    if (amount > 0) {
        // +amount product
    } else {
        if (amount == 1) {
            // delete row
        } else {
            // -amount product
        }
    }
}




export {
    getDataById
};