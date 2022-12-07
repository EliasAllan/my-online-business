const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const userData = await Tag.findAll();
    console.log(userData)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const userData = await Tag.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
 Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
 })

  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    // be specific about which datapoints to grab
    const {tag_name} = req.body;
    // put validation... add values
    const result = await Tag.update(
    {tag_name}, 
    {
      where: {
        // :id is basically which to update
        id: req.params.id
      }
    });
    res.json(result);
  }
  catch(err){
    res.status(404).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    // throw new Error("Forcing you to drop the taco");
    const result = await Tag.destroy({
      where: {
        // :id is basically which to delete
        id: req.params.id
      }
    });

    res.json(result);

  }
  catch(err){
    console.log(err);
    res.status(404).json(err);
  }
});

module.exports = router;
