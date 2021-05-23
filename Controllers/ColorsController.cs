using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using WebApplication_API.Models;
using WebApplication_APP.Data;

namespace WebApplication_APP.Controllers
{
    public class ColorsController : Controller
    {
        private readonly WebApplication_APPContext _context;
        private readonly IConfiguration _configuration;
        private HttpClient client = new HttpClient();
        private string requestUri = "/api/Colors/";

        public ColorsController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        // GET: Colors
        public async Task<IActionResult> Index()
        {
            List<Color> colors = new List<Color>();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            
            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                colors = JsonConvert.DeserializeObject<List<Color>>(results);
            }
            ViewData["Buscador"] = false;
            return View(colors);
        }

        [HttpGet]
        public async Task<IActionResult> IndexBuscador()
        {
            List<Color> colors = new List<Color>();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));

            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                colors = JsonConvert.DeserializeObject<List<Color>>(results);
            }
            ViewData["Buscador"] = true;
            return PartialView(nameof(Index),colors);
        }

        // GET: Colors/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Color color = new Color();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            requestUri = requestUri + id.ToString();
            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                color = JsonConvert.DeserializeObject<Color>(results);
            }

            if (color == null)
            {
                return NotFound();
            }

            return View(color);
        }

        // GET: Colors/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Colors/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("iden,codigo,nombre,TieneError,Error")] Color color)
        {   
            if (ModelState.IsValid)
            {
                client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));

                HttpContent _httpContent = new StringContent(JsonConvert.SerializeObject(color), Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync(requestUri, _httpContent);
                        
                return RedirectToAction(nameof(Index));
            }
            return View(color);
        }

        // GET: Colors/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Color color = new Color();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            requestUri = requestUri + id.ToString();
            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                color = JsonConvert.DeserializeObject<Color>(results);
            }
            
            return View(color);
        }

        // GET: Colors/EditByCodigo/5
        public async Task<IActionResult> EditByCodigo(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Color color = new Color();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            requestUri = requestUri + "GetByCodigo/" + id.ToString();
            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                color = JsonConvert.DeserializeObject<Color>(results);
                return View(nameof(Edit), color);
            }
            color.codigo = id;
            return View(nameof(Create),color);
        }

        // POST: Colors/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("iden,codigo,nombre,TieneError,Error")] Color color)
        {
            if (id != color.iden)
            {
                id = color.iden;
                //return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
                    requestUri = requestUri + id.ToString();
                    HttpContent _httpContent = new StringContent(JsonConvert.SerializeObject(color), Encoding.UTF8, "application/json"); 
                    HttpResponseMessage response = await client.PutAsync(requestUri, _httpContent);                    
                }
                catch (DbUpdateConcurrencyException)
                {
                    //if (!ColorExists(color.Iden))
                    //{
                    //    return NotFound();
                    //}
                    //else
                    //{
                        throw;
                    //}
                }
                return RedirectToAction(nameof(Index));
            }
            return View(color);
        }

        // GET: Colors/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Color color = new Color();
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            requestUri = requestUri + id.ToString();
            HttpResponseMessage response = await client.GetAsync(requestUri);
            if (response.IsSuccessStatusCode)
            {
                var results = response.Content.ReadAsStringAsync().Result;
                color = JsonConvert.DeserializeObject<Color>(results);
            }

            if (color == null)
            {
                return NotFound();
            }

            return View(color);
        }

        // POST: Colors/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            client.BaseAddress = new Uri(_configuration.GetConnectionString("DefaultConnection"));
            requestUri = requestUri + id.ToString();
            HttpResponseMessage response = await client.DeleteAsync(requestUri);
            return RedirectToAction(nameof(Index));
        }

        private bool ColorExists(decimal id)
        {
            return _context.Color.Any(e => e.iden == id);
        }
    }
}
