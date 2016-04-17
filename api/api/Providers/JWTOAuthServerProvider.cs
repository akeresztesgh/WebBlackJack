using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using api.Models;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;

namespace api.Providers
{
    public class JWTOAuthServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();

            ApplicationUser user = await userManager.FindAsync(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }

            ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(userManager,
               OAuthDefaults.AuthenticationType);
            ClaimsIdentity cookiesIdentity = await user.GenerateUserIdentityAsync(userManager,
                CookieAuthenticationDefaults.AuthenticationType);

            //AuthenticationProperties properties = CreateProperties(user.UserName);
            //AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
            //context.Validated(ticket);
            //context.Request.Context.Authentication.SignIn(cookiesIdentity);


            //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            
            //if (context.UserName != "aj")
            //{
            //    context.SetError("invalid_grant", "The user name is incorrect.");
            //    return;
            //}            
            //if (context.Password != "aj")
            //{
            //    context.SetError("invalid_grant", "The password is incorrect.");
            //    return;
            //}

            //var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            //identity.AddClaim(new Claim(ClaimTypes.Name, "aj"));
            //identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));

            //var props = new AuthenticationProperties(new Dictionary<string, string>
            //    {
            //        {
            //             "audience", context.ClientId ?? string.Empty
            //        }
            //    });

            //var ticket = new AuthenticationTicket(identity, props);
            //context.Validated(ticket);
        }
    }
}