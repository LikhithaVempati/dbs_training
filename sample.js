function customer(id,city,state){
    this.id=id
    this.city=city
    this.state=state


}
const c1=new customer(1,"hyd","telangana");
console.log(c1.id,c1.city,c1.state);

const bank={
    id:2,
    city:"jaipur",
    state:"rajasthan"
}
console.log(bank.id,bank.city,bank.state)