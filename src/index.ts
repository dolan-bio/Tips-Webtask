import { MaterialGrabber } from "@dolan-bio/tips";

module.exports = (context, cb) => {
    this.materialGrabber = new MaterialGrabber();
    
    console.log("Getting tip");
    const tip = this.materialGrabber.grabTip();
    
    cb(null, tip);
};
