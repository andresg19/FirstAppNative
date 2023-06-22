import  db  from "../../Config/firebase";

export const insertTable = (headTable, data) => {
 return async function () {
    console.log(headTable)
     try {
         const documentoRef = db.collection(headTable);
         await documentoRef.add(data);
         console.log('Documento insertado correctamente');
     } catch (error) {
         console.error('Error al insertar el documento:', error);
     }
}
    
};