const DelDoc24Hours = async(Modal)=>{
    const today = new Date();
    today.setHours(0,0,0,0);

    await Modal.deleteMany({createdAt : {$lt : today}})
}

module.exports = DelDoc24Hours