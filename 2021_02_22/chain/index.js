import o3 from "goss_proto";

const getProto = (obj) => {
  const prototype = (p) => {
    if (Object.getPrototypeOf(p))
      return p.name + ";" + prototype(Object.getPrototypeOf(p));
    else return p.name;
  };
  return prototype(obj);
};
console.log(getProto(o3["o3"]).split(";"));
