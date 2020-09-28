using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmpEFDalLib
{
    public class EFDal
    {
        public List<tbl_employee> GetAllEmps()
        {
            using(var dbCtx=new  DXCDBEntities())
            {
                var lstEmps = dbCtx.tbl_employee.ToList();
                return lstEmps;
            }
        }

        public tbl_employee GetEmpById(int id)
        {
            using (var dbCtx=new DXCDBEntities())
            {
                var record = dbCtx.tbl_employee
                                  .Where(o => o.ecode == id)
                                  .SingleOrDefault();
                return record;
            }
        }

        public void AddEmployee(tbl_employee emp)
        {
            using(var dbCtx=new DXCDBEntities())
            {
                dbCtx.tbl_employee.Add(emp);
                dbCtx.SaveChanges();
            }
        }

        public void DeleteEmpIById(int ecode)
        {
            using(var dbCtx=new  DXCDBEntities())
            {
                var record = dbCtx.tbl_employee
                                 .Where(o => o.ecode == ecode)
                                 .SingleOrDefault();

                dbCtx.tbl_employee.Remove(record);
                dbCtx.SaveChanges();
            }
        }

        public void UpdateEmp(tbl_employee emp)
        {
            using(var dbCtx=new  DXCDBEntities())
            {
                var record = dbCtx.tbl_employee
                                .Where(o => o.ecode == emp.ecode)
                                .SingleOrDefault();

                record.ename = emp.ename;
                record.salary = emp.salary;
                record.deptid = emp.deptid;

                dbCtx.SaveChanges();
            }
        }
    }
}
