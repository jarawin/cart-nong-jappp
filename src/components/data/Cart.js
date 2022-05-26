import sheetdb from 'sheetdb-node';
const client = sheetdb({ address: 'zhx6pde6mybzk' });

const getDataById = async (cid = "LU08d776c3a8144668a40caec4ee6599ca-U809ebc60c8b4a9fd8518ec029ab35ef5") => {
    try {
        let column = encodeURIComponent("รหัสลูกค้า")
        let sheetname = encodeURIComponent("ออเดอร์")
        const res = await client.read({ sheet: sheetname, search: { [column]: cid } })
        return JSON.parse(res)
    } catch (error) {
        console.log(error);
    }
}

const amountCart = async (cid, product, amount = 1) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")

    try {
        console.log("change to ", `${cid}${product}`);
        const res = await client.update(columnIdOrder, `${cid}${product}`, { "ปริมาณ": amount }, sheetname)
        console.log(res);
        return res

    } catch (error) {
        console.log(error);
    }
}

amountCart("LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5", "Sodium bicarbonate", 1)

const delRow = async (cid, product) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")

    try {
        const res = await client.delete(
            columnIdOrder, // column name
            `${cid}${product}`, // value to search for
            sheetname // sheet name
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

const getAmount = async (cid, product) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")

    try {
        console.log("find to ", `${cid}${product}`);
        const data = await client.read({ sheet: sheetname, search: { [columnIdOrder]: `${cid}${product}` } })
        console.log(JSON.parse(data));
        return parseInt(JSON.parse(data)[0]['ปริมาณ'])
    } catch (error) {
        console.log(error);
    }
}

const changeCart = async (amount, product, custid) => {
    const am = await getAmount(custid, product)
    console.log("ปริมาณ = ", am);

    if (amount < 0 && am == 1) {
        const res = await delRow(custid, product)
        console.log("delRow", res);
    } else {
        const res = await amountCart(custid, product, am + amount)
        console.log("amountCart", res);
    }
}

// changeCart(1, "Lyofast SYAB1", "LU860f6bf696256cd073664c448acf2bf6-U809ebc60c8b4a9fd8518ec029ab35ef5")



export {
    getDataById,
    changeCart,
};