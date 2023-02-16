const { getConnection } = require('../db');

const allCrop = async (req, res) => {
    const con = await getConnection();
    try {
        const crop = await con.query(
            'SELECT c.*, cs.type, cs.crop_status_id AS status FROM crop c LEFT JOIN crop_status cs ON cs.crop_status_id = c.crop_status'
        );
        res.status(200).json(
            {
                msg: 'Todos los cultivos',
                response: crop[0]
            }
        )
    } catch (error) {
        console.log(error);
        const errorMessage = Error('Ocurrio un error al consultar los cultivos');
        res.status(404).json({ msg: errorMessage.message });
    }
}

const newCrop = async (req, res) => {
    const con = await getConnection();
    const { crop_name, crop_status, latitude, longitude, quantity } = req.body;

    try {
        const crop = await con.query(
            'INSERT INTO crop (crop_name, crop_status, latitude, longitude, quantity) VALUES (?, ?, ?, ?, ?)',
            [crop_name, crop_status, latitude, longitude, quantity]
        );
        res.status(200).json(
            {
                msg: 'El cultivo se ha creado correctamente',
                response: crop[0]
            }
        )
    } catch (error) {
        console.log(error);
        const errorMessage = Error('Ocurrio un error al crear el usuario');
        res.status(404).json({ msg: errorMessage.message });
    }

}

const cropById = async (req, res) => {
    const con = await getConnection();
    const { id } = req.params;

    try {
        const crop = await con.query(
            'SELECT c.*, cs.type, cs.crop_status_id AS status FROM crop c LEFT JOIN crop_status cs ON cs.crop_status_id = c.crop_status WHERE crop_id = ?',
            [id]
        );
        res.status(200).json(
            {
                msg: `Se trajo el cultivo ${id}`,
                response: crop[0]
            }
        )
    } catch (error) {
        console.log(error);
        const errorMessage = Error('Ocurrio un error al consultar el cultivo');
        res.status(404).json({ msg: errorMessage.message });
    }
}

const updateCrop = async (req, res) => {
    const con = await getConnection();
    const { id } = req.params;
    const { crop_name, crop_status, quantity } = req.body;

    const cropExists = await con.query('SELECT * FROM crop WHERE crop_id = ?', [id]);
    let cropE = cropExists[0];

    if (!cropE[0]) {
        const error = Error('El cultivo no existe');
        return res.status(404).json({ msg: error.message });
    }

     cropE.crop_name = crop_name ||  cropE[0].crop_name;
     cropE.crop_status = crop_status ||  cropE[0].crop_status;
     cropE.quantity = quantity ||  cropE[0].quantity;

    try {
        const crop = await con.query(
            `UPDATE crop
                SET crop_name = ?, crop_status = ?, quantity = ?
            WHERE crop_id = ?`,
            [cropE.crop_name, cropE.crop_status, cropE.quantity, id]
        );
        res.status(200).json(
            {
                msg: `Se actualizo el cultivo ${crop_name}`,
                response: crop[0]
            }
        )
    } catch (error) {
        console.log(error);
        const errorMessage = Error('Ocurrio un error al consultar el cultivo');
        res.status(404).json({ msg: errorMessage.message });
    }
}

module.exports = { allCrop, newCrop, cropById, updateCrop };