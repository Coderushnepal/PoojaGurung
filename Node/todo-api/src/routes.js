import fs from 'fs';

import { Router } from 'express';
import { GET_USERS, GET_USER_BY_ID, CREATE_USER, UPDATE_USER, DELETE_USER } from './constants/endpoints';

import { validateUserCreation } from './schemas/user';
import logger from './utils/logger';

import userJson from './data/users.js';
const router = Router();

router.get("/", (request, response, next) => {
    logger.info('Fetching all the users');
    response.json({
        name:'todo-api',
        version:'1.0.0',
    });
});

router.get(GET_USERS, (request, response, next) => {
    logger.info('Fetching all the users');
    
    response.json(userJson);
})

router.get(GET_USER_BY_ID, (request, response, next) => {
    //console.log(request.params);
    
    const userId = +request.params.userId;
    
    logger.info(`Fetching user information with id ${ userId }`);
    const requiredUser = userJson.find(user => user.id === userId);

    if(!requiredUser) {
        logger.error(`Cannot find user with id ${ userId }`);

        response.json({
        message: "Cannot find user with " + userId ,
        });
    }
    response.json(requiredUser);
})

router.post(CREATE_USER, validateUserCreation, (request, response, next) => {
    const params = request.body;   

    const maxId = userJson.reduce((acc,cur) => {
        return cur.id > acc ? cur.id : acc ;
    }, 0);

    const updatedJson = [
        ...userJson,
        {
            id: maxId + 1,
            ...params
        }
    ];

    fs.writeFileSync('./users.js', JSON.stringify(updatedJson, null, 2));

    response.json({
        message: "New User added successfully",
        data: {
            id: maxId + 1,
            ...params
        }
    })
})

router.delete(DELETE_USER, ( request, response, next) => {
    const userId = +request.params.userId;

    const doesExistUser = userJson.find(user => user.id === userId);     

    if(!doesExistUser)
    {
        response.json({
            message: "Cannot find User with id " + userId ,
        })
    }

    const updatedUsersList = userJson.filter(user => user.id !== userId);

    fs.writeFileSync(userJson, JSON.stringify(updatedUsersList, null, 2));

    response.json({
        message: "User with Id " + userId +" is deleted",
    });
});

router.put(UPDATE_USER,(request, response, next) => {
    const userId = +request.params.userId;
    const params = request.body;
   

        const updatedJson = userJson.map(user => {
            if(user.id === userId)
            {
                return {
                    ...user,
                    ...params
                };
            }
            return user;
        })

    fs.writeFileSync(userJson, JSON.stringify(updatedJson, null, 2));

    response.json({
        message: "Updated user with Id " + userId ,
    });
});

export default router;