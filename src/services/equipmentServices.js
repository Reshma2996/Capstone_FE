import { instance, protectedInstance } from './instance';

const equipmentServices = {
    getJobs: async () => {
        return protectedInstance.get('/equipments');
    }
}

export default equipmentServices;