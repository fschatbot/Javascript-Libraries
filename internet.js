const internet = class internet{
    state = true
    on_online = () => console.log("You are now online!!")
    on_offline = () => console.log("You are now offline!!")
    #interval
    constructor(on_online,on_offline,force_check=true,time_interval=30000){
        // Define the functions
        Dummy_class.isfunction(on_online) ? this.on_online = on_online : 0
        Dummy_class.isfunction(on_offline) ? this.on_offline = on_offline : 0
        // Make the functions workable
        if (force_check){
            // For Advanced Check
            this.#interval = setInterval(async () => {
                is_online = await Dummy_class.is_online(true)
                if (is_online && this.state == false) {
                    this.state = true
                    this.on_online()
                } else if (!is_online && this.state == true) {
                    this.state = false
                    this.on_offline()
                }
            }, time_interval);
        } else {
            // For simple check
            window.addEventListener('online', () => {this.on_online(); this.state = true;});
            window.addEventListener('offline', () => {this.on_offline(); this.state = true;});
        }
    }
}