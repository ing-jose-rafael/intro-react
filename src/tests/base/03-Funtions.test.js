// import '@testing-library/jest-dom';
import { getUser, getUserActive } from '../../base/03-Funtions.js.js';

describe('Pruebas en 03-Funtions.js',()=>{
    test('getUser debe retonar un usuario Karen Paola',()=>{
        const userTesting = {
            uid: "ABC123",
            userName: "Karen Paola" 
        }
        const user = getUser();

        expect(user).toEqual(userTesting);
    });

    test('getUserActive debe retornar un usuario activo',()=>{
        const nombre = 'Karen';
        const user = getUserActive(nombre);
        expect(user).toEqual({
            uid: "ABC576",
            userName: "Karen" 
        });
    })
});