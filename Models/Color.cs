using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication_API.Models
{
    public class Color:ModeloBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public decimal iden { get; set; }
        [StringLength(20, ErrorMessage = "El campo Código no debe tener mas de 20 caracteres")]
        [Required]
        public string codigo { get; set; }
        [StringLength(20, ErrorMessage = "El campo Código no debe tener mas de 50 caracteres")]
        [Required]
        public string nombre { get; set; }

    }
}
