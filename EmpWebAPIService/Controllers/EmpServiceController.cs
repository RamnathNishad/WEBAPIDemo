using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using EmpEFDalLib; //DAL Layer

namespace EmpWebAPIService.Controllers
{
    [RoutePrefix("api/EmpService")]
    [EnableCors(origins: "http://localhost:54639",headers:"*",methods:"*")]
    public class EmpServiceController : ApiController
    {

        [HttpGet]
        [Route("GetAllDeptids")]
        public IEnumerable<string> GetAllDeptids()
        {
            return new List<string> { "Account", "Admin", "Sales" };
        }


        // GET: api/EmpService
        public IEnumerable<tbl_employee> Get()
        {
            EFDal dal = new EFDal();
            var empLst = dal.GetAllEmps();
            return empLst;
        }

        // GET: api/EmpService/5
        public tbl_employee Get(int id)
        {
            EFDal dal = new EFDal();
            var emp = dal.GetEmpById(id);
            return emp;
        }

        // POST: api/EmpService
        public void Post([FromBody]tbl_employee emp)
        {
            EFDal dal = new EFDal();
            dal.AddEmployee(emp);
        }

        // PUT: api/EmpService/5
        public void Put(int id, [FromBody]tbl_employee emp)
        {
            EFDal dal = new EFDal();
            dal.UpdateEmp(emp);
        }

        // DELETE: api/EmpService/5
        public void Delete(int id)
        {
            EFDal dal = new EFDal();
            dal.DeleteEmpIById(id);
        }
    }
}
