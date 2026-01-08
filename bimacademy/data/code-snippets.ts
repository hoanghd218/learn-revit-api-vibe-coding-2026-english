/**
 * Real C# / Revit API Code Snippets
 * Used in hero code animation to demonstrate actual BIM development
 */

export const revitCodeSnippets = [
  {
    id: 1,
    title: 'Element Filtering',
    code: `// Filter all walls in active view
var collector = new FilteredElementCollector(doc, doc.ActiveView.Id);
var walls = collector.OfClass(typeof(Wall)).ToElements();
TaskDialog.Show("Count", $"Found {walls.Count} walls");`,
  },
  {
    id: 2,
    title: 'Transaction Management',
    code: `// Modify element within transaction
using (Transaction trans = new Transaction(doc, "Update Wall"))
{
    trans.Start();
    wall.get_Parameter(BuiltInParameter.WALL_HEIGHT_TYPE).Set(newHeight);
    trans.Commit();
}`,
  },
  {
    id: 3,
    title: 'Element Creation',
    code: `// Create new wall
Line line = Line.CreateBound(new XYZ(0,0,0), new XYZ(10,0,0));
Wall wall = Wall.Create(doc, line, levelId, false);
wall.get_Parameter(BuiltInParameter.WALL_ATTR_WIDTH_PARAM).Set(0.2);`,
  },
  {
    id: 4,
    title: 'Parameter Access',
    code: `// Read and modify parameters
Parameter heightParam = wall.LookupParameter("Height");
double currentHeight = heightParam.AsDouble();
heightParam.Set(currentHeight * 1.5);`,
  },
  {
    id: 5,
    title: 'External Command',
    code: `public class AutoTag : IExternalCommand
{
    public Result Execute(ExternalCommandData commandData,
                         ref string message, ElementSet elements)
    {
        var uiDoc = commandData.Application.ActiveUIDocument;
        var doc = uiDoc.Document;
        // Implementation here...
        return Result.Succeeded;
    }
}`,
  },
] as const;

// Combined code for scrolling animation
export const heroAnimationCode = `using Autodesk.Revit.DB;
using Autodesk.Revit.UI;
using System.Linq;

namespace BIMDeveloper.Commands
{
    [Transaction(TransactionMode.Manual)]
    public class AutoReinforcement : IExternalCommand
    {
        public Result Execute(
            ExternalCommandData commandData,
            ref string message,
            ElementSet elements)
        {
            UIDocument uiDoc = commandData.Application.ActiveUIDocument;
            Document doc = uiDoc.Document;

            // Get all structural framing in active view
            var collector = new FilteredElementCollector(doc, doc.ActiveView.Id)
                .OfCategory(BuiltInCategory.OST_StructuralFraming)
                .WhereElementIsNotElementType();

            var beams = collector.ToElements();

            using (Transaction trans = new Transaction(doc, "Add Rebar"))
            {
                trans.Start();

                foreach (Element beam in beams)
                {
                    // Get beam geometry
                    Options options = new Options();
                    GeometryElement geoElem = beam.get_Geometry(options);

                    // Calculate rebar placement
                    var solid = geoElem.OfType<Solid>().FirstOrDefault();
                    if (solid != null)
                    {
                        // Create rebar based on beam dimensions
                        CreateRebarForBeam(doc, beam, solid);
                    }
                }

                trans.Commit();
            }

            TaskDialog.Show("Success",
                $"Added reinforcement to {beams.Count()} beams");

            return Result.Succeeded;
        }

        private void CreateRebarForBeam(Document doc, Element beam, Solid solid)
        {
            // Rebar creation logic
            // ... implementation details
        }
    }
}`;
