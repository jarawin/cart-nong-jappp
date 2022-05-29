import sheetdb from 'sheetdb-node';
const client = sheetdb({ address: '5gilfubg05wer' });

const getDataById = async (cid) => {
    try {
        let column = encodeURIComponent("รหัสลูกค้า")
        let sheetname = encodeURIComponent("ออเดอร์")
        return JSON.parse(await client.read({ sheet: sheetname, search: { [column]: cid } }))

    } catch (error) {
        console.log(error);
    }
}

const amountCart = async (cid, product, amount, row) => {
    try {
        row['ปริมาณ'] = amount

        const res1 = await delRow(cid, product)
        const res2 = await addRow(row)

        if (res1 && res2) {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error);
        return false
    }
}


const addRow = async (data) => {
    let sheetname = encodeURIComponent("ออเดอร์")

    try {
        await client.create(data, sheetname)
        return true
    } catch (error) {
        console.log(error);
        return false
    }


}

const delRow = async (cid, product) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")

    try {
        await client.delete(columnIdOrder, `${cid}${product}`, sheetname)
        return "deleted"
    } catch (error) {
        console.log(error);
        return false
    }
}

const getAmount = async (cid, product) => {
    let sheetname = encodeURIComponent("ออเดอร์")
    let columnIdOrder = encodeURIComponent("รหัสออเดอร์")

    try {
        const data = await client.read({ sheet: sheetname, search: { [columnIdOrder]: `${cid}${product}` } })
        return JSON.parse(data)[0]
    } catch (error) {
        console.log(error);
    }
}

const changeCart = async (amount, product, custid) => {
    const row = await getAmount(custid, product)
    const am = parseInt(row['ปริมาณ'])

    if (amount < 0 && am == 1) {
        return await delRow(custid, product)
    } else {
        return await amountCart(custid, product, am + amount, row)
    }
}




export {
    getDataById,
    changeCart,
};