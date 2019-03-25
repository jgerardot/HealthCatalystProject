using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(HealthCatalystProject.Startup))]

namespace HealthCatalystProject
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfiguration = new HttpConfiguration();
            WebApiConfig.Register(httpConfiguration);

            app.UseWebApi(httpConfiguration);

            //Make .App folder as the default root for the static files
            app.UseFileServer(new FileServerOptions {
                RequestPath = new Microsoft.Owin.PathString(string.Empty),
                FileSystem = new PhysicalFileSystem("./Angular/wwwroot"),
                EnableDirectoryBrowsing = true
            });

            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
