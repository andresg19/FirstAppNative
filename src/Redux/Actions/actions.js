import  db  from "../../Config/firebase";
import { GET_DETAIL, GET_TABLES } from "./actionTypes";

export const insertTable = (headTable, data) => {
 return async function () {
     try {
         const documentoRef = db.collection('Prueba 2000');
         await documentoRef.doc(headTable).set(data);
         console.log('Documento insertado correctamente');
     } catch (error) {
         console.error(error);
     }
}
    
};

export const getTables = () => {
    return async function (dispatch) {
        try {
            
            const request = await db.collection('Prueba 2000').get();
        const tables = request.docs.map((doc) => doc.data());
        const proveedores = request.docs.map((doc) => doc.id);

            return dispatch({
                type: GET_TABLES,
                payload: [[tables], [proveedores]]
            })
        } catch (error) {
            console.error('Error al traer la tabla', error);
        }
   }
       
   };

export const getDetail = (name) => {
    return async function (dispatch) {
        try {
            const request = db.collection('Prueba 2000').doc(name);
            const result = (await request.get()).data();

            return dispatch({
                type: GET_DETAIL,
                payload: result
            })
        } catch (error) {
            console.log('error al traer el detail', error)
        }
    }
}