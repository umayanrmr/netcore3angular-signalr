using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR.Contracts;
using SignalR.DTO;
using System;

namespace SignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private IHubContext<NotifyHub, ITypedHubClient> _hubContext;

        public MessageController(IHubContext<NotifyHub, ITypedHubClient>  hubContext)
        {
            _hubContext = hubContext;
        }


        [HttpGet]
        public string Get()
        {
            string retMessage = string.Empty;
            var message = new MessageDTO { Type = "warning", Information = "test message " + Guid.NewGuid().ToString() };
            try
            {
                _hubContext.Clients.All.BroadcastMessage(message);
                retMessage = "Success";
            }
            catch (Exception e)
            {
                retMessage = e.ToString();
            }

            return retMessage;
        }
    }


}
